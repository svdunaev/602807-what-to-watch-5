import React, {PureComponent} from "react";

export default class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      textValue: ``,
      rateValue: ``,
    };

    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.rateChangeHandler = this.rateChangeHandler.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();
  }

  textChangeHandler(evt) {
    this.setState({textValue: evt.target.value});
  }

  rateChangeHandler(evt) {
    this.setState({rateValue: evt.target.value});
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={this.rateChangeHandler}/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={this.rateChangeHandler}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked onChange={this.rateChangeHandler}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={this.rateChangeHandler}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={this.rateChangeHandler}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text" onChange={this.textChangeHandler}>
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    );
  }
}
