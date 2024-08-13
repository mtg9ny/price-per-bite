import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
import { mdiPencil } from '@mdi/js';
import { mdiNoteMultiple } from '@mdi/js';
import styles from '../styles/sidebar.module.css'
export default function SideBar() {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <Icon path={mdiHome} size={1.1} />
                    <div>Home</div>
                </div>
                <div>
                    <Icon path={mdiNoteMultiple} size={1} />
                    <div>All Recipes</div>
                </div>
                <div>
                    <Icon path={mdiPencil} size={1} />
                    <div>Create Recipe</div>
                </div>
            </div>
        </>
    )
}