import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CompanyAPI from '../api/Company';
import { Company } from '../models/company';


interface ExploreState {
  title:String
}
interface ExploreProps{
  title2: String
}
export class Explore extends Component<ExploreProps, ExploreState> {

  state = {
    title : this.props.title2
  }

  async componentDidMount() {
    let company: Company = await CompanyAPI.getInstance().getCompanyById("138252")
    this.setState({ title: company.name });
    console.log(company)
  }

  render() {
    return (
      <View style={styles.titleText}>
        <Text> {this.state.title}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  titleText: {
     flex: 1, justifyContent: 'center', alignItems: 'center' 
  },
});
export default Explore
