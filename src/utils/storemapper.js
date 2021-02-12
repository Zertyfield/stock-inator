import { AmazonNL } from '../store/sources/amazon-nl.js';
import { AmazonDE } from '../store/sources/amazon-de.js';
import { AmazonUK } from '../store/sources/amazon-uk.js';
import { AmazonES } from '../store/sources/amazon-es.js';
import { AmazonIT } from '../store/sources/amazon-it.js';
import { Megekko } from '../store/sources/megekko.js';
import { Azerty } from '../store/sources/azerty.js';
import { Coolblue } from '../store/sources/coolblue.js';
import { Caseking } from '../store/sources/caseking.js';
import { AMD } from '../store/sources/amd.js';
import { Alternate } from '../store/sources/alternate.js';
import { Mediamarkt } from '../store/sources/mediamarkt.js';
import { Bol } from '../store/sources/bol.js';
import { BCC } from '../store/sources/bcc.js';
import { Nedgame } from '../store/sources/nedgame.js';

export const StoreMapper = {
    'amazon-nl': AmazonNL,
    'amazon-de': AmazonDE,
    'amazon-uk': AmazonUK,
    'amazon-es': AmazonES,
    'amazon-it': AmazonIT,
    'azerty': Azerty,
    'caseking': Caseking,
    'coolblue': Coolblue,
    'megekko': Megekko,
    'amd': AMD,
    'alternate': Alternate,
    'mediamarkt': Mediamarkt,
    'bol': Bol,
    'bcc': BCC,
    'nedgame': Nedgame
}