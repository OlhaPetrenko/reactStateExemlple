import { Component } from 'react';

class AccordionItem extends Component {
  state = {
    isShow: false,
  };
  clickBtn = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { clickBtn } = this;
    return (
      <div>
        <button type="button" onClick={clickBtn}>
          {' '}
          Click me!
        </button>

        {this.state.isShow && (
          <div>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut
            distinctio porro beatae ea delectus earum aliquam fugit asperiores.
            Labore, dicta vel. Autem soluta cumque saepe perferendis
            perspiciatis officiis quos.
          </div>
        )}
      </div>
    );
  }
}

export default AccordionItem;
