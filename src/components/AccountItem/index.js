import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/d362acb8a933beb9207c7e1028848d15.jpeg?lk3s=a5d48078&nonce=1981&refresh_token=efb8da3102a8ebd07a170e04d60081e9&x-expires=1727431200&x-signature=JFbQj5cYr809D2eSdvVUBBKEslc%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>If.tlinh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>tlinh</span>
            </div>
        </div>
    );
}

export default AccountItem;
