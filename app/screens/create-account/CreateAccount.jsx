import React, { useState } from 'react';
import { View, Image, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import CreateAccountStyles from './CreateAccount.styles';
import createAccountValidation from '../../utils/createAccountValidation';
import { setUser } from '../../store/userSlice';
import { saveDataInStorage } from '../../store/asyncStorage';

function CreateAccount() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    group: {},
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    const { status, msg } = createAccountValidation(formData);
    if (!status) {
      toast.show(msg, { type: 'danger' });
      return;
    }

    try {
      const payload = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        groupID: formData.group.id,
      };

      const createAccountResponse = await axios.post('http://176.109.111.116:8000/account/create-user', { ...payload });
      await saveDataInStorage(createAccountResponse.data);
      dispatch(setUser(createAccountResponse.data));
    } catch (e) {
      if (e.response) {
        toast.show(e.response.data.error, { type: 'danger' });
      } else if (e.request) {
        toast.show(e.response.data, { type: 'danger' });
      } else {
        toast.show(e.message, { type: 'danger' });
      }
    }
  };

  const handleGroupSelection = () => {
    navigation.navigate('SearchStart', { context: 'firstRun', handleGroupSelected: handleInputChange });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={CreateAccountStyles.bg}>
          <Image style={CreateAccountStyles.bgPattern} source={require('../../../assets/images/bg_pattern.png')} />
          <View style={CreateAccountStyles.controls}>
            <Text style={CreateAccountStyles.title}>Создать аккаунт</Text>
            <View style={CreateAccountStyles.field}>
              <Text style={CreateAccountStyles.supportText}>Имя:</Text>
              <TextInput
                style={CreateAccountStyles.input}
                placeholder='Введите Ваше имя'
                placeholderTextColor='#000000'
                value={formData.firstname}
                onChangeText={(text) => handleInputChange('firstname', text)}
              />
            </View>
            <View style={CreateAccountStyles.field}>
              <Text style={CreateAccountStyles.supportText}>Фамилия:</Text>
              <TextInput
                style={CreateAccountStyles.input}
                placeholder='Введите Вашу фамилию'
                placeholderTextColor='#000000'
                value={formData.lastname}
                onChangeText={(text) => handleInputChange('lastname', text)}
              />
            </View>
            <View style={CreateAccountStyles.field}>
              <Text style={CreateAccountStyles.supportText}>Электронная почта:</Text>
              <TextInput
                style={CreateAccountStyles.input}
                placeholder='Введите Вашу email'
                placeholderTextColor='#000000'
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
              />
            </View>
            <View style={CreateAccountStyles.field}>
              <Text style={CreateAccountStyles.supportText}>Пароль:</Text>
              <TextInput
                style={CreateAccountStyles.input}
                placeholder='Введите Ваш пароль'
                placeholderTextColor='#000000'
                value={formData.password}
                onChangeText={(text) => handleInputChange('password', text)}
              />
            </View>
            <View style={CreateAccountStyles.field}>
              <Text style={CreateAccountStyles.supportText}>Учебная группа:</Text>
              <Pressable style={CreateAccountStyles.input} onPress={handleGroupSelection}>
                <Text style={CreateAccountStyles.selectGroupText}>
                  {formData.group.name ? formData.group.name : 'Выберите Вашу группу'}
                </Text>
              </Pressable>
            </View>
            <Pressable style={CreateAccountStyles.createBtn} onPress={handleSubmit}>
              <Text style={CreateAccountStyles.createBtnText}>Создать аккаунт</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default CreateAccount;
