import React from 'react';
import {
    WifiOff,
    AudioWaveform,
    BookOpen,
    Shield,
    Lock,
    Sparkles,
    FileText,
    Image,
    Brain,
    Menu,
    X,
    Quote
} from 'lucide-react';

const defaultProps = {
    strokeWidth: 1.5
};

export const IconOffline = (props) => <WifiOff size={32} {...defaultProps} {...props} />;
export const IconFlow = (props) => <AudioWaveform size={32} {...defaultProps} {...props} />;
export const IconStories = (props) => <BookOpen size={32} {...defaultProps} {...props} />;
export const IconShield = (props) => <Shield size={16} strokeWidth={2} {...props} />;
export const IconLock = (props) => <Lock size={16} strokeWidth={2} {...props} />;
export const IconMagic = (props) => <Sparkles size={20} strokeWidth={2} {...props} />;
export const IconFileText = (props) => <FileText size={20} strokeWidth={2} {...props} />;
export const IconImage = (props) => <Image size={24} {...defaultProps} {...props} />;
export const IconBrain = (props) => <Brain size={64} strokeWidth={1} {...props} />;
export const IconMenu = (props) => <Menu size={24} {...defaultProps} {...props} />;
export const IconClose = (props) => <X size={24} {...defaultProps} {...props} />;
export const IconQuote = (props) => <Quote size={40} {...defaultProps} {...props} />;
