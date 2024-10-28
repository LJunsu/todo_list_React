import { Component } from 'react';
import "./Form.css"

class Form extends Component {
    render() {
        var value = this.props.value; // 인풋의 내용
        var onChange = this.props.onChange; // 인풋 내용이 변경될 때 실행되는 함수
        var onCreate = this.props.onCreate; // 버튼이 클릭될 때 실행될 함수
        var onKeyPress = this.props.onKeyPress; // 인풋에서 키를 입력할 때 실행되는 함수
        var color = this.props.color;

        return(
            <div className = "form">
                <input 
                    value = {value}
                    onChange = {onChange}
                    onKeyPress = {onKeyPress}
                    style = {{color : color}}
                />

                <div 
                    className = "create-button" 
                    onClick = {onCreate}
                >
                    추가
                </div>
            </div>
        );
    }
}

export default Form;