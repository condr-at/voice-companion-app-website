import React from 'react';
import {
    Coffee,
    Speech,
    ScrollText,
    Smartphone,
    EyeOff,
    CloudOff,
    SmilePlus,
    GraduationCap,
    ScanEye,
    Menu,
    X,
    Quote
} from 'lucide-react';

const defaultProps = {
    strokeWidth: 1.5
};

export const IconCoffee = (props) => <Coffee size={32} {...defaultProps} {...props} />;
export const IconSpeech = (props) => <Speech size={32} {...defaultProps} {...props} />;
export const IconScrollText = (props) => <ScrollText size={32} {...defaultProps} {...props} />;
export const IconSmartphone = (props) => <Smartphone size={16} strokeWidth={2} {...props} />;
export const IconEyeOff = (props) => <EyeOff size={16} strokeWidth={2} {...props} />;
export const IconCloudOff = (props) => <CloudOff size={64} strokeWidth={1} {...props} />;
export const IconSmilePlus = (props) => <SmilePlus size={20} strokeWidth={2} {...props} />;
export const IconGraduationCap = (props) => <GraduationCap size={20} strokeWidth={2} {...props} />;
export const IconScanEye = (props) => <ScanEye size={24} {...defaultProps} {...props} />;
export const IconMenu = (props) => <Menu size={24} {...defaultProps} {...props} />;
export const IconClose = (props) => <X size={24} {...defaultProps} {...props} />;
export const IconQuote = (props) => <Quote size={40} {...defaultProps} {...props} />;
