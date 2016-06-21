import React from 'react';
import {merge} from 'lodash';

import storeConnect from '../addons/storeConnect';

import * as C from '../shared';

class Divider extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    style: React.PropTypes.object
  }

  render() {
    return (
      <div
        style={merge({
          width: '100%',
          height: '20px',
          backgroundColor: 'black',
          lineHeight: '20px',
          fontSize: '16px',
          textAlign: 'center',
          color: 'white',
          marginBottom: 20,
          marginTop: 20
        }, this.props.style)}
      >
        {this.props.title}
      </div>
    );
  }
}

class ColorBlockContainer extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '60px',
          marginTop: '10px',
          marginBottom: '10px',
          overflow: 'none'
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

class ColorBlock extends React.Component {
  static propTypes = {
    color: React.PropTypes.string,
    name: React.PropTypes.string
  }

  render() {
    return (
      <div
        style={{
          height: '60px',
          marginLeft: '10px',
          marginRight: '10px',
          width: '150px',
          textAlign: 'center',
          float: 'left',
          backgroundColor: this.props.color || 'black'
        }}
      >
        <p style={{marginTop: 10, marginBottom: 5, weight: 'bold'}}>{this.props.name}</p>
        <p>{this.props.color}</p>
      </div>
    );
  }
}


class Reference extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  render() {
    const {user} = this.props.application;

    return (
      <div>
       <Divider title='Colors' style={{marginTop: 0}}/>
        <ColorBlockContainer>
          <ColorBlock name='green-1' color='#77b395' />
          <ColorBlock name='green-2' color='#4b956f' />
          <ColorBlock name='green-3' color='#28774f' />
          <ColorBlock name='green-4' color='#0f5933' />
        </ColorBlockContainer>

        <ColorBlockContainer>
          <ColorBlock name='$blue-1' color='#063c4a'/>
          <ColorBlock name='$blue-2' color='#006680'/>
          <ColorBlock name='$blue-3' color='#00a6cf'/>
          <ColorBlock name='$blue-4' color='#3ac1e1'/>
        </ColorBlockContainer>

        <ColorBlockContainer>
          <ColorBlock name='$teal-1' color='#0dceaf'/>
          <ColorBlock name='$red-1' color='#e7465a'/>
          <ColorBlock name='$yellow-1' color='#fdb813'/>
        </ColorBlockContainer>

        <ColorBlockContainer>
          <ColorBlock name='$gray-01' color='#333'/>
          <ColorBlock name='$gray-02' color='#666'/>
          <ColorBlock name='$gray-03' color='#d2d2d2'/>
          <ColorBlock name='$gray-04' color='#fafafa'/>
        </ColorBlockContainer>
       <Divider title='Hero'/>
       <C.Hero title='Hero Component'/>

       <Divider title='Form'/>
       <C.Form>
        <C.TextInput
          name='test'
          placeholder='Text Input'
        />
        <C.Submit />
       </C.Form>
      </div>
    );
  }
}

export default storeConnect(['application'])(Reference);
