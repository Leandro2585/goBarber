import React, { 
    useImperativeHandle, 
    forwardRef, 
    useEffect, 
    useRef,
    useState,
    useCallback
} from 'react';
import { useField } from '@unform/core';
import { TextInputProps } from 'react-native';
import { Container, Icon, TextInput } from './style';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
    containerStyle?: {};
}

interface InputValueReference {
    value: string;
}

interface InputRef {
    focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
    { name, icon, containerStyle = {}, ...rest }, 
    ref
) => {
    const inputElementRef = useRef<any>(null);
    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputElementRef.current.focus();
            }
        }
    });

    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            }
        });
    }, [fieldName, registerField]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, [isFocused]);
    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputValueRef.current.value); 
    }, [isFocused]);

    return(
        <Container style={containerStyle} isFocused={isFocused} isErrored={!!error}>
            <Icon 
                name={icon}
                size={20}
                color={isFocused || isFilled ? '#ff9000' : '#666360'}
            />
            <TextInput
                ref={inputElementRef}
                keyboardAppearance="dark"
                placeholderTextColor="#666360"
                defaultValue={defaultValue}  
                onFocus={handleInputFocus}
                onBlur={handleInputBlur} 
                onChangeText={(value) => {
                    inputValueRef.current.value = value;
                }}            
                {...rest}
            />
        </Container>
    );
}
export default forwardRef(Input);