import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallbackSrc, setFallbackSrc] = useState('');

    const handleError = () => {
        setFallbackSrc(customFallback);
    };

    return (
        <img
            className={classNames(className, styles.wrapper)}
            ref={ref}
            src={fallbackSrc || src}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
