import { editProfile } from '@/store/actions/profile'
import { useDispatch } from 'react-redux'
import styles from './index.module.scss'
type Props = {
    type: '' | 'gender' | 'photo'
    hiddenList: () => void
}
const genderList = [
    {
        title: '男',
        value: '0',
    },
    {
        title: '女',
        value: '1',
    },
]
const photoList = [
    {
        title: '拍照',
        value: '',
    },
    {
        title: '从相册选择',
        value: '',
    },
]
const EditList = ({ type, hiddenList }: Props) => {
    const list = type === 'gender' ? genderList : photoList
    const dispatch = useDispatch()
    return (
        <div className={styles.root}>
            {list.map(item => (
                <div
                    className='list-item'
                    key={item.title}
                    onClick={() => {
                        if (type === 'photo') {
                            return
                        }
                        dispatch(editProfile('gender', item.value))
                        hiddenList()
                    }}
                >
                    {item.title}
                </div>
            ))}

            <div className='list-item' onClick={() => hiddenList()}>
                取消
            </div>
        </div>
    )
}

export default EditList
