{"filter":false,"title":"App.js","tooltip":"/amplify-quicksight-dashboard-embedded/src/App.js","undoManager":{"mark":33,"position":33,"stack":[[{"start":{"row":0,"column":0},"end":{"row":25,"column":0},"action":"remove","lines":["import logo from './logo.svg';","import './App.css';","","function App() {","  return (","    <div className=\"App\">","      <header className=\"App-header\">","        <img src={logo} className=\"App-logo\" alt=\"logo\" />","        <p>","          Edit <code>src/App.js</code> and save to reload.","        </p>","        <a","          className=\"App-link\"","          href=\"https://reactjs.org\"","          target=\"_blank\"","          rel=\"noopener noreferrer\"","        >","          Learn React","        </a>","      </header>","    </div>","  );","}","","export default App;",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":35,"column":0},"action":"insert","lines":["import Typography from '@material-ui/core/Typography';","import Container from '@material-ui/core/Container';","import Amplify, { Auth } from 'aws-amplify';","import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';","import awsconfig from './aws-exports';","import Embed from './Embed';","import { makeStyles } from '@material-ui/core/styles';","","Amplify.configure(awsconfig);","","const useStyles = makeStyles((theme) => ({","  title: {","    paddingTop: theme.spacing(2)","  },","}));","","function App() {","  ","  const classes = useStyles();","  ","  return (","    <div>","      <AmplifySignOut />","      <Container maxWidth=\"md\">","        <Typography variant=\"h4\" component=\"h1\" align=\"center\" color=\"textPrimary\" className={classes.title} gutterBottom>","          Amazon QuickSight Embed","        </Typography>","        <Embed />","      </Container>","    </div>","  );","}","","export default withAuthenticator(App);","",""]}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"insert","lines":["Auth.configure(awsconfig);",""],"id":3}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["Auth.configure(awsconfig);",""],"id":4}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"insert","lines":["Auth.configure(awsconfig);",""],"id":6}],[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":[" "],"id":9},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["A"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["m"]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["p"]}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":21},"action":"remove","lines":["Amp"],"id":10},{"start":{"row":2,"column":18},"end":{"row":2,"column":25},"action":"insert","lines":["Amplify"]}],[{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":[","],"id":11}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":14},"action":"remove","lines":["Amplify"],"id":12}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"remove","lines":[","],"id":13},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"remove","lines":[" "]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["/"],"id":14}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":["/"],"id":15}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["$"],"id":16}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":["$"],"id":17}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["/"],"id":18},{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"remove","lines":[";"],"id":19}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["{"],"id":21}],[{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["}"],"id":22}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"remove","lines":["{"],"id":39}],[{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"remove","lines":["}"],"id":40}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["/"],"id":41},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":28},"action":"remove","lines":["//Amplify.configure(awsconfig)","//Auth.configure(awsconfig);"],"id":42},{"start":{"row":8,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["import Amplify, {","   Auth","} from 'aws-amplify';","import awsconfig from './aws-exports';","","Amplify.configure(awsconfig);","","// >>New - Configuring Auth Module","Auth.configure(awsconfig);",""]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["/"],"id":43},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["/"],"id":44},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":33,"column":31},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":45},{"start":{"row":34,"column":0},"end":{"row":34,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":34,"column":6},"end":{"row":35,"column":20},"action":"insert","lines":["<TopBar />","            <Main />"],"id":46}],[{"start":{"row":35,"column":10},"end":{"row":35,"column":12},"action":"remove","lines":["  "],"id":47},{"start":{"row":35,"column":8},"end":{"row":35,"column":10},"action":"remove","lines":["  "]},{"start":{"row":35,"column":6},"end":{"row":35,"column":8},"action":"remove","lines":["  "]}],[{"start":{"row":33,"column":31},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":48},{"start":{"row":34,"column":0},"end":{"row":34,"column":6},"action":"insert","lines":["      "]},{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"insert","lines":["z"]},{"start":{"row":34,"column":7},"end":{"row":34,"column":8},"action":"insert","lines":["Z"]}],[{"start":{"row":34,"column":7},"end":{"row":34,"column":8},"action":"remove","lines":["Z"],"id":49},{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"remove","lines":["z"]}],[{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"insert","lines":["<"],"id":50},{"start":{"row":34,"column":7},"end":{"row":34,"column":8},"action":"insert","lines":[">"]}],[{"start":{"row":36,"column":14},"end":{"row":37,"column":0},"action":"insert","lines":["",""],"id":51},{"start":{"row":37,"column":0},"end":{"row":37,"column":6},"action":"insert","lines":["      "]},{"start":{"row":37,"column":6},"end":{"row":37,"column":7},"action":"insert","lines":["<"]},{"start":{"row":37,"column":7},"end":{"row":37,"column":8},"action":"insert","lines":["/"]},{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"insert","lines":[">"]}],[{"start":{"row":3,"column":74},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":52}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":42},"action":"insert","lines":["import TopBar from \"./components/TopBar/top-bar\";","import Main from \"./components/Main/Main\";"],"id":53}],[{"start":{"row":40,"column":8},"end":{"row":42,"column":21},"action":"remove","lines":["<Typography variant=\"h4\" component=\"h1\" align=\"center\" color=\"textPrimary\" className={classes.title} gutterBottom>","          Amazon QuickSight Embed","        </Typography>"],"id":54},{"start":{"row":40,"column":6},"end":{"row":40,"column":8},"action":"remove","lines":["  "]},{"start":{"row":40,"column":4},"end":{"row":40,"column":6},"action":"remove","lines":["  "]},{"start":{"row":40,"column":2},"end":{"row":40,"column":4},"action":"remove","lines":["  "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"remove","lines":["  "]},{"start":{"row":39,"column":9},"end":{"row":40,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":521.5,"scrollleft":0,"selection":{"start":{"row":38,"column":14},"end":{"row":38,"column":14},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":24,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1635026799119,"hash":"bc1152403a3d51b77b6441a16eca76a3d460d85a"}