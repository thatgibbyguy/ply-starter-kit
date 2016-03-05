import slugify from 'slugify';

export default React.createClass({
  getInitialState() {
    return {
      slugifiedString: null,
      textValue: null,
      buttonDisabled: null
    }
  },

  setTextValue(event) {
    this.state.textValue = event.target.value;
    // if textValue has no value disabled is true
    // else disabled is false
    let isDisabled = !this.state.textValue ? true : false;
    this.state.buttonDisabled = isDisabled;
  },

  render() {
    let { slugifiedString, 
          textValue,
          buttonDisabled } = this.state;

    // if slugifiedString has value placeholderText is empty
    // else placeHolderText = What do you want to slugify?
    const placeholderText = slugifiedString ? '' : 'What do you want to slugify?';

    return (
      <form className="forms forms-inline">
        <input type="text" 
               className="width-50" 
               placeholder={placeholderText}
               onChange={this.setTextValue} />
        <button className="btn" disabled={buttonDisabled}>Slugify This String</button>
      </form>
    );
  }
});
