import './style';
import { Component } from 'preact';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

export default class App extends Component {

   getRequestJWT = () => {
      axios.get('http://localhost:4040/!getRequestJWT')
         .then( r => console.log(r) )
   }

	render() {
		return (
			<div>
            <button
               onClick={this.getRequestJWT}
            >
               Send JWT to PL in HTTP Header
            </button>
			</div>
		);
	}
}
