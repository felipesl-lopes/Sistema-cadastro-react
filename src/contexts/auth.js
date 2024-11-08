import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../services/firebaseConnection";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const storage = localStorage.getItem("@ticketsPro");

      if (storage) {
        setUser(JSON.parse(storage));
      }
      setLoading(false);
    })();
  }, []);

  /**
   * Função para logar usuário.
   * @param {*} email
   * @param {*} password
   */
  const signIn = async (email, password) => {
    setLoadingAuth(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        const docRef = doc(db, "users", value.user.uid);
        await getDoc(docRef).then(async (data) => {
          let list = {
            name: data.data().name,
            avatarUrl: data.data().avatarUrl,
            email: value.user.email,
            uid: value.user.uid,
          };
          setUser(list);
          await storageUser(list);
          navigate("/dashboard");
        });
      })
      .catch((error) => {
        alert("Erro ao fazer login. Tente novamente.");
        console.log(error);
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  };

  /**
   * Função para salvar dados do usuário localmente.
   * @param {*} data
   */
  const storageUser = async (data) => {
    localStorage.setItem("@ticketsPro", JSON.stringify(data));
  };

  /**
   * Função para cadastrar usuário.
   * @param {*} name
   * @param {*} email
   * @param {*} password
   */
  const signUp = async (name, email, password) => {
    setLoadingAuth(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        await setDoc(doc(db, "users", value.user.uid), {
          name: name,
          avatarUrl: null,
        }).then(async () => {
          let data = {
            name: name,
            email: value.user.email,
            uid: value.user.uid,
            avatarUrl: null,
          };
          setUser(data);
          await storageUser(data);
          navigate("/dashboard");
        });
      })
      .catch(() => {
        alert("Erro ao se cadastrar. Tente novamente.");
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  };

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(
          "E-mail de redefinição de senha enviado! Verifique sua caixa de entrada."
        );
      })
      .catch(() => {
        alert(
          "Erro ao enviar o e-mail de redefinição de senha. Verifique o e-mail digitado."
        );
      });
  };

  const logout = async () => {
    await signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert("Erro ao deslogar.");
        console.log(error);
      });
    localStorage.removeItem("@ticketsPro");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        setUser,
        signIn,
        signUp,
        loadingAuth,
        setLoadingAuth,
        loading,
        logout,
        storageUser,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
