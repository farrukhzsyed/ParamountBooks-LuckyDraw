import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { View, Text, Button,Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';
import GenerateForm from 'react-native-form-builder';




 
const styles = {
  wrapper: {
    flex: 1,
    marginTop: 10,
  
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
};
// These Fields will create a login form with three fields
const fields = [
  {
    type: 'text',
    name: 'Name',
    required: true,
    icon: 'ios-person',
    label: 'Full Name',
  },
  {
    type: 'number',
    name: 'Phone',
    required: true,
    icon: 'logo-whatsapp',
    label: 'Phone #',
    
  },
  
  {
    type: 'text',
    name: 'Company',
    required: false,
    icon: 'md-globe',
    label: 'Company/School/Institute',
  },
  {
    type: 'text',
    name: 'designation',
    icon: 'ios-briefcase',
    required: false,
    label: 'Designation',
  },{
    type: 'text',
    name: 'Home',
    icon: 'ios-home',
    required: false,
    label: 'Home Address',
  },{
    type: 'text',
    name: 'email',
    icon: 'mail',
    required: true,
    label: 'E-mail Address',
  },
  
];
export default class FormGenerator extends Component {
  login() {
    this.props.navigation.navigate('Tab2');
  }
 
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
     
        </View>
        <View style={styles.submitButton}>
          
          <Button block info style={{ backgroundColor: "#00adef" }}  onPress={() => this.login() }>
            <Text fontfamily="arial">Next</Text>
          </Button>
        </View>
        
      </View>
    );
  }
  
}

 
AppRegistry.registerComponent('FormGenerator', () => FormGenerator);