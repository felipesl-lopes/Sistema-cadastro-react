import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiEdit2, FiMessageSquare, FiPlus, FiSearch } from "react-icons/fi";
import { ComponentHeader } from "../../components/ComponentHeader";
import { ComponentTitle } from "../../components/ComponentTitle";
import { formatedDate } from "../../functions/formatedDate";
import { returnColor } from "../../functions/returnColor";
import { db } from "../../services/firebaseConnection";
import { Container, GlobalContainer } from "../../styles/globalStyles";
import {
  ActionButton,
  ButtonMore,
  ButtonNew,
  NotCalled,
  Status,
  Table,
} from "./styled";

export const Dashboard = () => {
  const [called, setCalled] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastDocs, setLastDocs] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const docRef = collection(db, "called");

  useEffect(() => {
    (async () => {
      const q = query(docRef, orderBy("created", "asc"), limit(10));
      const querySnapshot = await getDocs(q);
      setCalled([]);
      await updateState(querySnapshot);
      setLoading(false);
    })();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateState = async (querySnapshot) => {
    const isCollectionEmpty = querySnapshot.size === 0;

    if (!isCollectionEmpty) {
      let list = [];
      querySnapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          userUid: doc.data().userUid,
          subject: doc.data().subject,
          status: doc.data().status,
          customerName: doc.data().customerName,
          customerId: doc.data().customerId,
          created: doc.data().created,
          complement: doc.data().complement,
        });
      });

      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]; // Pegando o ultimo item
      setCalled((current) => [...current, ...list]);
      setLastDocs(lastDoc);
    }

    if (querySnapshot.size < 10) {
      setIsEmpty(true);
    }

    setLoadingMore(false);
  };

  const handleMore = async () => {
    if (loadingMore || isEmpty) return;

    setLoadingMore(true);

    const q = query(
      docRef,
      orderBy("created", "asc"),
      startAfter(lastDocs),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    await updateState(querySnapshot);

    if (querySnapshot.size === 0) {
      setIsEmpty(true);
    }
  };

  return (
    <Container>
      <ComponentHeader />

      <GlobalContainer>
        <ComponentTitle title="Tickets">
          <FiMessageSquare size={20} />
        </ComponentTitle>

        <>
          <ButtonNew to={"/new"}>
            <FiPlus />
            Novo chamado
          </ButtonNew>
        </>

        {loading ? (
          <NotCalled>Carregando...</NotCalled>
        ) : (
          <>
            {called.length === 0 ? (
              <NotCalled>Nenhum chamado registrado.</NotCalled>
            ) : (
              <>
                <Table>
                  <thead>
                    <tr>
                      <th scope="col">Cliente</th>
                      <th scope="col">Assunto</th>
                      <th scope="col">Status</th>
                      <th scope="col">Cadastrado em</th>
                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {called.map((item, index) => (
                      <tr key={index}>
                        <td data-label="Cliente">{item.customerName}</td>
                        <td data-label="Assunto">{item.subject}</td>
                        <td data-label="Status">
                          <Status
                            style={{
                              backgroundColor: returnColor(item.status),
                            }}
                          >
                            {item.status}
                          </Status>
                        </td>
                        <td data-label="Cadastrado">
                          {formatedDate(item.created.seconds)}
                        </td>
                        <td data-label=" ">
                          <ActionButton
                            to={""}
                            style={{ backgroundColor: "#3583f6" }}
                          >
                            <FiSearch />
                          </ActionButton>

                          <ActionButton
                            to={`/new/${item.id}`}
                            style={{ backgroundColor: "#f6a935" }}
                          >
                            <FiEdit2 />
                          </ActionButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                {!loadingMore && !isEmpty && (
                  <ButtonMore onClick={handleMore}>Buscar mais</ButtonMore>
                )}
              </>
            )}
          </>
        )}

        <br />
      </GlobalContainer>
    </Container>
  );
};
