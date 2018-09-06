import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      twitter: author.twitter,
      facebook: author.facebook,
      github: author.github,
      rss: author.rss,
      email: author.email
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`https://twitter.com/${links.twitter}`} rel="noopener noreferrer" target="_blank" >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.facebook.com/${links.facebook}`} rel="noopener noreferrer" target="_blank" >
              <i className="icon-facebook" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://github.com/${links.github}`} rel="noopener noreferrer" target="_blank" >
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.rss}>
              <i className="icon-rss" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
