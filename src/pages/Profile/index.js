/* eslint-disable jsx-a11y/alt-text */
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useContext, useState } from "react";
import { FiSettings, FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import avatar from "../../assets/avatar.png";
import { ButtonAuth } from "../../components/ButtonAuth";
import { ComponentHeader } from "../../components/ComponentHeader";
import { ComponentTitle } from "../../components/ComponentTitle";
import { InputAuth } from "../../components/InputAuth";
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
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);

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

  const handleSubmit = async () => {
    setLoadingAuth(true);
    if (imageAvatar === null && name !== "") {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        name: name,
      })
        .then(async () => {
          let data = {
            ...user,
            name: name,
          };
          setUser(await data);
          await storageUser(data);
          toast.success("Dados alterados com sucesso!");
        })
        .finally(() => {
          setLoadingAuth(false);
        });
    } else if (name !== "" && imageAvatar !== null) {
      await handleUpload();
    }
  };

  const handleUpload = async () => {
    const uploadRef = ref(storage, `image/${user.uid}/${imageAvatar.name}`);

    await uploadBytes(uploadRef, imageAvatar)
      .then((data) => {
        getDownloadURL(data.ref).then(async (downloadUrl) => {
          const docRef = doc(db, "users", user.uid);
          await updateDoc(docRef, {
            avatarUrl: downloadUrl,
            name: name,
          }).then(async () => {
            let data = {
              ...user,
              avatarUrl: downloadUrl,
              name: name,
            };
            setUser(await data);
            await storageUser(data);
            toast.success("Dados alterados com sucesso!");
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
          <GlobalForm
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <LabelAvatar>
              <Span>
                <FiUpload color="#fff" size={25} />
              </Span>
              <InputImg type="file" accept="image/*" onChange={handleFile} />{" "}
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
            <InputAuth onChange={setName} value={name} />

            <LabelInput>E-mail</LabelInput>
            <InputAuth
              value={email}
              onChange={setEmail}
              type="email"
              disabled={true}
            />

            <ButtonAuth title={"Salvar"} />
          </GlobalForm>
        </ProfileContainer>
      </GlobalContainer>
    </Container>
  );
};
