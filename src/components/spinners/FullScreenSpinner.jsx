import ScaleLoader from 'react-spinners/ScaleLoader';

const override = {
  borderColor: 'red',
  display: 'block',
  left: '50%',
  margin: 'auto',
  position: 'fixed',
  top: '50%',
  zIndex: '9999',
};

function FullScreenSpinner(props) {
  const { loading, color } = props;

  return (
    <div className="sweet-loading">
      <ScaleLoader
        color={color}
        loading={loading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

FullScreenSpinner.defaultProps = {
  color: '#fff',
  loading: true,
};
export default FullScreenSpinner;
