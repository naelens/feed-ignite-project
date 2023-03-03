import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string)=> void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0) 

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false}
                src="https://github.com/naelens.png" 
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
        	            <div className={styles.authorAndTime}>
                            <strong>Naelem Souza</strong>
                            <time 
                                title='24 de Feveiro de 2023'
                                dateTime='2023-02-24 20:16'>
                                <span>Cerca de 1h atrás</span>
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}