import React, {Component} from 'react';

class CrimesContain extends Component {
constructor(){
    super();
    this.state={
        crimes: []
    }
}
getCrimes = async () =>{

    try{
      const crimes = await fetch('https://data.cityofchicago.org/resource/crimes.json')
      const crimesJson = await crimes.json();
      return crimesJson
    }catch(err){
      return err
    }
  }

componentDidMount(){
    this.getCrimes().then((crimes)=>{
        this.setState({
            crimes: crimes
        })
    })
}
    render(){
        return(
        <div>
            BRANCH

            </div>
        )
    }
}

export default CrimesContain;
        // const newCrimes = this.state.crimes
        //     return(<div key={index}>
        //         <h1>{crimes.description}</h1>
        //         {JSON.stringify(crimes)}
        //         {crimes.date}
        //         {crimes.primary_type})