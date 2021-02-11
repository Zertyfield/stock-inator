import { Megekko } from '../store/sources/megekko.js';
import { Azerty } from '../store/sources/azerty.js';
import { Amazon } from '../store/sources/amazon.js';
import { Coolblue } from '../store/sources/coolblue.js';
import { Caseking } from '../store/sources/caseking.js';
import { AMD } from '../store/sources/amd.js';
import { Alternate } from '../store/sources/alternate.js';
import { Mediamarkt } from '../store/sources/mediamarkt.js';
import { Bol } from '../store/sources/bol.js';
import { BCC } from '../store/sources/bcc.js';

export const StoreMapper = {
    'amazon': Amazon,
    'azerty': Azerty,
    'caseking': Caseking,
    'coolblue': Coolblue,
    'megekko': Megekko,
    'amd': AMD,
    'alternate': Alternate,
    'mediamarkt': Mediamarkt,
    'bol': Bol,
    'bcc': BCC
}