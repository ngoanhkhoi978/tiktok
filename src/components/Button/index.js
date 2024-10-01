import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = to ? Link : href ? 'a' : 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
    });

    const _props = {
        onClick,
        to,
        href,
        ...passProps,
    };

    return (
        <Comp className={classes} {..._props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
