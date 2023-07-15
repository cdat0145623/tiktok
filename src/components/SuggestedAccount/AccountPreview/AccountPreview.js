import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0cf66f047a4af8e214d04e3e0ea814d2~c5_100x100.jpeg?x-expires=1689451200&x-signature=oic13Zxmd3bkpR%2Boh%2FY%2BS9hm6t8%3D"
                    alt=""
                    className={cx('avatar')}
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>pinkpineapplevv6</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Pinkpineapple.dw</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>3.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>443K </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
