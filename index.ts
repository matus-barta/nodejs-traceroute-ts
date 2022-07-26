import { platform } from 'os';

import tracert from './tracert';
import traceroute from './traceroute';

export default platform() === 'win32' ? tracert : traceroute;
