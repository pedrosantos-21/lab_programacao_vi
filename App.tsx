import { Formik } from 'formik';
import * as Yup from 'yup';
import React, {useState, useCallback} from 'react';
import { ImageBackground, StyleSheet, View, TextInput, Text, Button } from 'react-native';
import {Botao} from './src/components/botao';

export default function App() {

    /* const [valor, setValor] = useState('');

    const handleBotao = useCallback(() => {
      console.log('Clicou 1')
    }, []) */

    const [resultado, setResultado] = useState<null | 'logado' | 'falhou'>(null);

    const handleLogin = async ({ email, senha }: any) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (email.trim() === 'teste@teste.com' && senha.trim() === '123456')
        setResultado('logado');
      else
        setResultado('falhou');
    };

  return (
      <View style={styles.container}>
        <Formik 
          initialValues={{ email: '', senha: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .required('Informe o email')
              .email('E-mail não válido'),
            senha: Yup.string()
              .required('Informe a senha')
              .min(6, 'A senha precisa ter 6 caracteres'),
          })}
          onSubmit={handleLogin}> 
            {({
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <>
                <Text>Login</Text>
                <TextInput
                  placeholder='Digite seu email'
                  onBlur={handleBlur('email')}
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  keyboardType='email-address'
                />
                {errors.email && touched.email && (
                  <Text style={styles.fail}>{errors.email}</Text>
                )}
                <TextInput
                  placeholder='Digite sua senha'
                  onBlur={handleBlur('senha')}
                  style={styles.textInput}
                  onChangeText={handleChange('senha')}
                  secureTextEntry
                />
                {errors.senha && touched.senha && (
                  <Text style={styles.fail}>{errors.senha}</Text>
                )}
                <Button
                  title='Logar'
                  onPress={() => handleSubmit()}
                  disabled={isSubmitting}
                />

                { resultado == 'logado' && (
                  <Text style={styles.success}> Logado com sucesso </Text> 
                )}
                { resultado == 'falhou' && (
                  <Text style={styles.fail}>Email ou Senha incorreta </Text>
                )}
                
              </>
            )} 
        </Formik>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textInput: {
    backgroundColor: 'lightgrey',
    padding: 2,
    marginVertical: 5,
  },
  fail: {
    textAlign: 'center',
    color: 'red',
  },
  success: {
    textAlign: 'center',
    color: 'green',
  },
});
