import * as React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import { navigate } from "gatsby";

const useStyles = createUseStyles({
  postCard: {
    '&:hover': {
      cursor: 'pointer',
      '& .title': {
        textDecoration: 'underline',
      },
    },
    '& .title': {
      fontSize: '2rem',
      lineHeight: '2.3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    '& .excerpt': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    '& .author-info': {
      '& .separator': {
        margin: '0 0.5rem',
      },
      '& .author': {
        fontWeight: 'bold',
      },
      '& .separator:first-child': {
        marginLeft: '0',
      }
    },
  },
});


export const PostCard = ({ title, date, author, slug, excerpt }) => {

  const classes = useStyles();
  return (<div className={classNames("post-card", classes.postCard)} onClick={
    () => { navigate(`/blog/${slug}`) }
  }>
    <p className="title">{title}</p>
    <p className="excerpt">{excerpt}</p>
    <div className="author-info">
      <span className="separator">By</span>
      <span className="author">{author}</span>
      <span className="separator">|</span>
      <span className="date">{date}</span>
    </div>
  </div>
)
}
