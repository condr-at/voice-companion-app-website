import React from 'react';
import {
    Coffee,
    Speech,
    ScrollText,
    Smartphone,
    EyeOff,
    Unplug,
    UserPlus,
    GraduationCap,
    ScanEye,
    Telescope,
    Sprout,
    Shrub,
    Languages,
    TentTree,
    Heart,
    Menu,
    X,
    Quote,
    Shield,
    Section,
    Bird
} from 'lucide-react';

const defaultProps = {
    strokeWidth: 1.5
};

export const IconCoffee = (props) => <Coffee size={32} {...defaultProps} {...props} />;
export const IconSpeech = (props) => <Speech size={32} {...defaultProps} {...props} />;
export const IconScrollText = (props) => <ScrollText size={32} {...defaultProps} {...props} />;
export const IconTelescope = (props) => <Telescope size={32} {...defaultProps} {...props} />;
export const IconSmartphone = (props) => <Smartphone size={16} strokeWidth={2} {...props} />;
export const IconEyeOff = (props) => <EyeOff size={16} strokeWidth={2} {...props} />;
export const IconUnplug = (props) => <Unplug size={64} strokeWidth={1} {...props} />;
export const IconUserPlus = (props) => <UserPlus size={20} strokeWidth={2} {...props} />;
export const IconGraduationCap = (props) => <GraduationCap size={20} strokeWidth={2} {...props} />;
export const IconScanEye = (props) => <ScanEye size={24} {...defaultProps} {...props} />;
export const IconSprout = (props) => <Sprout size={32} {...defaultProps} {...props} />;
export const IconShrub = (props) => <Shrub size={32} {...defaultProps} {...props} />;
export const IconLanguages = (props) => <Languages size={32} {...defaultProps} {...props} />;
export const IconTentTree = (props) => <TentTree size={32} {...defaultProps} {...props} />;
export const IconHeart = (props) => <Heart size={32} {...defaultProps} {...props} />;
export const IconMenu = (props) => <Menu size={24} {...defaultProps} {...props} />;
export const IconClose = (props) => <X size={24} {...defaultProps} {...props} />;
export const IconQuote = (props) => <Quote size={40} {...defaultProps} {...props} />;
export const IconShield = (props) => <Shield size={18} {...defaultProps} {...props} />;
export const IconSection = (props) => <Section size={22} {...defaultProps} {...props} />;
export const IconBird = (props) => <Bird size={24} {...defaultProps} {...props} />;
