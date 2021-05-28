import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CompanyAPI from '../api/Company';
import { Company } from '../models/company';

export class ExploreScreen extends Component<{}, { title:String}> {
  constructor(props:any){
    super(props)
    this.state = {
      title : ""
    }
  }

  async componentDidMount() {
    let company: Company = await CompanyAPI.getInstance().getCompanyById("138252")
    this.setState({ title: company.name });
    console.log(company)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> {this.state.title}</Text>
      </View>
    )
  }
}

export default ExploreScreen
