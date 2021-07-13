import Enzyme from 'enzyme'; // npm install --save-dev enzyme
import Adapter from '@wojtekmaj/enzyme-adapter-react-17' // npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
import { createSerializer } from 'enzyme-to-json' // npm install --save-dev enzyme-to-json

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }));