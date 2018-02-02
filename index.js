import './style';
import { Component } from 'preact';
import axios from 'axios';

// don't get excited, not a real token
axios.defaults.headers.common['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

export default class App extends Component {

   getRequestJWT = () => {
      axios.get('https://erikdgustafson.com/preact-pil-jwt/!getRequestJWT')
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
