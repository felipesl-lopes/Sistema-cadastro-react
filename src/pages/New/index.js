import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonAuth from "../../components/ButtonAuth";
import { ComponentHeader } from "../../components/ComponentHeader";
import { ComponentTitle } from "../../components/ComponentTitle";
import { AuthContext } from "../../contexts/auth";
import { db } from "../../services/firebaseConnection";
import {
  GlobalContainer,
  GlobalContent,
  GlobalForm,
  GlobalLabel,
} from "../../styles/globalStyles";
import {
  Container,
  InputLoading,
  Loading,
  Select,
  Status,
  TextArea,
} from "./styled";

export const New = () => {
  const { user, setLoadingAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [customers, setCustomers] = useState([]);
  const [customerSelected, setCustomerSelected] = useState(0);
  const [loading, setLoading] = useState(true);
  const [complement, setComplement] = useState("");
  const [subject, setSubject] = useState("Suporte");
  const [status, setStatus] = useState("");
  const [loadingData, setLoadingData] = useState(id ? true : false);

  const loadId = useCallback(
    async (list) => {
      setLoadingData(true);
      const docRef = doc(db, "called", id);
      await getDoc(docRef)
        .then(async (doc) => {
          setComplement(await doc.data().complement);
          setStatus(await doc.data().status);
          setSubject(await doc.data().subject);

          let index = list.findIndex(
            (item) => item.id === doc.data().customerId
          );
          setCustomerSelected(index);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoadingData(false);
        });
    },
    [id]
  );

  useEffect(() => {
    (async () => {
      let listRef = collection(db, "customers");
      await getDocs(listRef)
        .then((snapshot) => {
          let list = [];
          snapshot.forEach((doc) => {
            list.push({
              id: doc.id,
              fantasyName: doc.data().fantasyName,
            });
          });
          if (snapshot.docs.size === 0) {
            setCustomers([{ id: "1", fantasyName: "FREELA" }]);
          } else {
            setCustomers(list);
          }

          if (id) {
            loadId(list);
          }
        })
        .catch((error) => {
          console.log(error);
          setCustomers([{ id: "1", fantasyName: "FREELA" }]);
        })
        .finally(() => {
          setLoading(false);
        });
    })();
  }, [id, loadId]);

  const handleOptionChange = (e) => {
    setStatus(e.target.value);
  };

  const handleCustomerChange = (e) => {
    setCustomerSelected(e.target.value);
  };

  const handleRegisterCalled = async () => {
    // Se tiver id, o botão irá atualizar o chamado
    if (status === "") {
      return toast.error("Selecione o status do chamado.");
    }
    if (id) {
      const docRef = doc(db, "called", id);
      await updateDoc(docRef, {
        customerName: customers[customerSelected].fantasyName,
        customerId: customers[customerSelected].id,
        subject: subject,
        complement: complement,
        status: status,
        userUid: user.uid,
      })
        .then(() => {
          toast.success("Chamado atualizado com sucesso!");
          navigate("/dashboard");
        })
        .catch(() => {
          toast.error("Erro ao atualizar chamado. Tente novamente.");
        });
      return;
    }
    setLoadingAuth(true);
    await addDoc(collection(db, "called"), {
      created: new Date(),
      customerName: customers[customerSelected].fantasyName,
      customerId: customers[customerSelected].id,
      subject: subject,
      complement: complement,
      status: status,
      userUid: user.uid,
    })
      .then(() => {
        toast.success("Chamado registrado!");
        setCustomerSelected(0);
        setSubject("Suporte");
        setComplement("");
        setStatus("");
      })
      .catch(() => {
        toast.error(
          "Erro ao registrar chamado. Verifique os dados e tente novamente."
        );
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  };

  return (
    <Container>
      <ComponentHeader />

      <GlobalContainer>
        <ComponentTitle title={id ? "Editando chamado" : "Novo chamado"}>
          <FiPlusCircle size={20} />
        </ComponentTitle>

        <GlobalContent>
          {loadingData ? (
            <Loading>Carregando...</Loading>
          ) : (
            <GlobalForm
              onSubmit={(e) => {
                e.preventDefault();
                handleRegisterCalled();
              }}
            >
              <GlobalLabel>Clientes</GlobalLabel>
              {loading ? (
                <InputLoading
                  type="text"
                  disabled={true}
                  value="Carregando..."
                />
              ) : (
                <Select
                  value={customerSelected}
                  onChange={handleCustomerChange}
                >
                  {customers.map((item, index) => (
                    <option key={index} value={index}>
                      {item.fantasyName}
                    </option>
                  ))}
                </Select>
              )}

              <GlobalLabel>Assunto</GlobalLabel>
              <Select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="Suporte">Suporte</option>
                <option value="Visita técnica">Visita técnica</option>
                <option value="Financeiro">Financeiro</option>
              </Select>

              <GlobalLabel>Status</GlobalLabel>
              <Status>
                <input
                  type="radio"
                  name="radio"
                  value="Em aberto"
                  onChange={handleOptionChange}
                  checked={status === "Em aberto"}
                />
                <span>Em aberto</span>

                <input
                  type="radio"
                  name="radio"
                  value="Progresso"
                  onChange={handleOptionChange}
                  checked={status === "Progresso"}
                />
                <span>Progresso</span>

                <input
                  type="radio"
                  name="radio"
                  value="Atendido"
                  onChange={handleOptionChange}
                  checked={status === "Atendido"}
                />
                <span>Atendido</span>
              </Status>

              <GlobalLabel>Complemento</GlobalLabel>
              <TextArea
              color="orange"
                type="text"
                placeholder="Descreva o problema (opcional)."
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />

              <ButtonAuth title={id ? "Atualizar" : "Registrar"} />
            </GlobalForm>
          )}
        </GlobalContent>
      </GlobalContainer>
    </Container>
  );
};
