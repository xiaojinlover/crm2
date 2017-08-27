import React from 'react';
import { connect } from 'dva';
import styles from './Index.css';
import TabBarCrm from '../components/tabbarcrm/TabBarCrm';

function Index() {
  return (
    <div className={styles.normal}>
    	<TabBarCrm />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
