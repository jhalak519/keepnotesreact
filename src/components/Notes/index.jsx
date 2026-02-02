import React from "react";
import styles from './style.module.css';
function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }
    const MAX_LENGTH = 100;
    const content = props.content || "";
    const shouldTruncate = content.length > MAX_LENGTH;
    const displayContent = shouldTruncate ? content.substring(0, MAX_LENGTH) + "..." : content;

    return (
        <div className={styles.note} onClick={() => props.onView(props.id)}>
            <h1>{props.title}</h1>
            <p className={styles.content}>
                {displayContent}
                {shouldTruncate && (
                    <span
                        className={styles.readMore}
                        onClick={(e) => {
                            e.stopPropagation();
                            props.onView(props.id);
                        }}
                    >
                        Read More
                    </span>
                )}
            </p>
            <div className={styles.buttonGroup}>
                <button onClick={(e) => {
                    e.stopPropagation();
                    props.onEdit(props.id);
                }}>Edit</button>
                <button onClick={(e) => {
                    e.stopPropagation();
                    handleClick();
                }}>Delete</button>
            </div>
        </div>
    )
}
export default Note;