import React from 'react'; 
import { Alert } from 'reactstrap';


class AlertError extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Alert color="danger" isOpen={this.props.visible}>
        Сообщение не должно быть пустым
      </Alert>
    );
  }
}

export default AlertError