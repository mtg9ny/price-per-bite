import styles from '../styles/individual.module.css'

export default function Keywords({ json }) {
    return (
        <>
            <div className={styles.keywords}>
                {json.vegetarian && <div>Vegetarian</div>}
                {json.glutenFree && <div>Gluten Free</div>}
                {json.dairyFree && <div>Dairy Free</div>}
                {json.veryHealthy && <div>Very Healthy</div>}
                {json.cheap && <div>Cheap</div>}
                {json.veryPopular && <div>Very Popular</div>}
                {json.sustainable && <div>Sustainable</div>}
                {json.weightWatcherSmartPoints && <div>Weight Watcher Smart Points: {json.weightWatcherSmartPoints}</div>}
                {json.preparationMinutes && <div>{json.preparationMinutes}</div>}
                {json.cookingMinutes && <div>{json.cookingMinutes}</div>}
            </div>
        </>
    )
}