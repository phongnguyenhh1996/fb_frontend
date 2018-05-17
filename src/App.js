import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount(){
    var x= document.getElementsByClassName('profile');
    console.log(x);
  }
  render() {
    return (
      <div className="container-fluid">
        <header className="row pl-5 py-1">
          <div className="col-6 d-flex align-items-center justify-content-start">
            <a href="#" className="link text-white"><i className="fab fa-facebook-square fa-2x"></i></a>
            <div className="col-10">
              <div className="input-group input-group-sm search">
              <input type="text" className="form-control" placeholder="Tìm kiếm" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="input-group-text px-3" id="basic-addon2"><i className="fas fa-search"></i></button>
              </div>
            </div>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <a href="#" className="profile d-flex align-items-center px-2">
              <img className="rounded-circle mr-2" src={require('./images/image_1.jpg')}/>
              <span className="name">Phong</span>
            </a>
            <div className="account-changer">
                <img src={require('./images/account-changer.png')}/>
            </div>
            <a href="#" className="profile px-2">
              <span className="name">Trang chủ</span>
            </a>
            <div>
              <img src={require('./images/friend-request.png')}/>
            </div>
            <div>
              <img src={require('./images/messenger.png')}/>
            </div>
            <div>
              <img src={require('./images/nofi.png')}/>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
