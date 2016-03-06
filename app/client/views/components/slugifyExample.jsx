import React from 'react';
import slugify from 'slugify';

export default React.createClass({
  propTypes: {
    isDisabled: React.PropTypes.bool,
    showSlug: React.PropTypes.bool
  },

  getInitialState() {
    return {
      slugifiedString: null,
      textValue: null,
      isDisabled: this.props.isDisabled,
      showSlug: this.props.showSlug
    }
  },

  handleInput(event) {
    this.setState({ 
      textValue: event.target.value,
      isDisabled: false
    });

    if (this.state.textValue && this.state.textValue.length > 1) {
      this.setState({
        isDisabled: false
      })
    }
    else {
      this.setState({
        isDisabled: true,
        showSlug: false
      })
    }
  },

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      showSlug: true,
      slugifiedString: slugify(this.state.textValue)
    });
  },

  render() {
    let { textValue,
          isDisabled } = this.state;
    return (
      <div>
        <form className="forms forms-inline">
          <input type="text" 
                 className="width-50" 
                 placeholder="What do you want to slugify?"
                 onChange={this.handleInput} />
          <button className="btn" 
                  disabled={isDisabled}
                  onClick={this.handleSubmit}>Slugify This String</button>
          {this.renderSlugifiedString()}
        </form>
      </div>
    );
  },

  renderSlugifiedString() {
    const { showSlug, 
            slugifiedString } = this.state;

    if (showSlug) {
      return(
        <div>
          <h3>Your Slugified String:</h3>
          <p>{slugifiedString}</p>
        </div>
      );
    }
  }
});
