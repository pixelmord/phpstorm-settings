import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/#[[$ACTION_FILENAME$]]#';

import #[[$COMPONENT_NAME$]]# from './#[[$COMPONENT_NAME$]]#';

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    authenticated: state.#[[ $END$ ]]#
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(#[[$COMPONENT_NAME$]]#);