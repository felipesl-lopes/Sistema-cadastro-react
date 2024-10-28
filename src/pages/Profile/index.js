/* eslint-disable jsx-a11y/alt-text */
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FiSettings, FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { z } from "zod";
import avatar from "../../assets/avatar.png";
import ButtonAuth from "../../components/ButtonAuth";
import { ComponentHeader } from "../../components/ComponentHeader";
import { ComponentTitle } from "../../components/ComponentTitle";
import InputAuth from "../../components/InputAuth";
import { AuthContext } from "../../contexts/auth";
import { db, storage } from "../../services/firebaseConnection";
import { GlobalContainer, GlobalForm } from "../../styles/globalStyles";
import {
  Container,
  ImgProfile,
  InputImg,
  LabelAvatar,
  LabelInput,
  ProfileContainer,
  Span,
} from "./styled";

export const Profile = () => {
  const { user, storageUser, setUser, setLoadingAuth } =
    useContext(AuthContext);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);

  const schema = z.object({
    name: z.string().min(1, "Campo obrigatório"),
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Digite um e-mail válido"),
  });

  const defaultValues = useMemo(
    () => ({
      name: user.name,
      email: user.email,
    }),
    [user.name, user.email]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleFile = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatar(image);
        setAvatarUrl(URL.createObjectURL(image));
      } else {
        toast.error("Envie uma imagem do tipo PNG ou JPEG.");
        setImageAvatar(null);
      }
    }
  };

  const handleSubmitForm = async (data) => {
    setLoadingAuth(true);
    if (imageAvatar === null && (await data.name) !== "") {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        name: await data.name,
      })
        .then(async () => {
          let dataList = {
            ...user,
            name: await data.name,
          };
          setUser(await dataList);
          await storageUser(dataList);
          toast.success("Dados alterados com sucesso!");
        })
        .catch(() => {
          alert("Erro ao tentar salvar as alterações.");
        })
        .finally(() => {
          setLoadingAuth(false);
        });
    } else if ((await data.name) !== "" && imageAvatar !== null) {
      await handleUpload(await data);
    }
    reset({
      name: data.name,
      email: data.email,
    });
  };

  const handleUpload = async (data) => {
    const uploadRef = ref(storage, `image/${user.uid}/${imageAvatar.name}`);

    await uploadBytes(uploadRef, imageAvatar)
      .then((docUser) => {
        getDownloadURL(docUser.ref).then(async (downloadUrl) => {
          const docRef = doc(db, "users", user.uid);
          await updateDoc(docRef, {
            avatarUrl: downloadUrl,
            name: await data.name,
          }).then(async () => {
            let dataList = {
              ...user,
              avatarUrl: downloadUrl,
              name: await data.name,
            };
            setUser(await dataList);
            await storageUser(dataList);
            toast.success("Dados alterados com sucesso!");
            setImageAvatar(null);
          });
        });
      })
      .catch(() => {
        toast.error("Erro ao alterar dados. Tente novamente.");
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  };

  return (
    <Container>
      <ComponentHeader />

      <GlobalContainer>
        <ComponentTitle title="Meu perfil">
          <FiSettings size={20} />
        </ComponentTitle>

        <ProfileContainer>
          <GlobalForm onSubmit={handleSubmit(handleSubmitForm)}>
            <LabelAvatar>
              <Span>
                <FiUpload color="#fff" size={25} />
              </Span>

              <InputImg type="file" accept="image/*" onChange={handleFile} />

              <br />
              <ImgProfile
                src={avatarUrl ? avatarUrl : avatar}
                alt="Foto de perfil"
                height={250}
                width={250}
              />
            </LabelAvatar>

            <br />

            <LabelInput>Nome</LabelInput>

            <InputAuth
              type="text"
              id="name"
              required={true}
              register={register}
              errors={errors.name && errors.name?.message}
            />

            <LabelInput>E-mail</LabelInput>
            <InputAuth
              disabled={true}
              placeholder="E-mail"
              type="email"
              id="email"
              required={true}
              register={register}
              errors={errors.email && errors.email?.message}
            />

            <ButtonAuth
              title={"Salvar"}
              disable={!isDirty && imageAvatar === null}
            />
          </GlobalForm>
        </ProfileContainer>
      </GlobalContainer>
    </Container>
  );
};
