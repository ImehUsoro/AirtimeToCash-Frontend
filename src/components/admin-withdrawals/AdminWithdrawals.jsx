import React from 'react';
import { AdminWithdrawalsStyles } from './AdminWithdrawalsStyles';
import WithdrawalsTable from './WithdrawalsTable';

const AdminWithdrawals = () => {
  return (
    <AdminWithdrawalsStyles>
      <h2>Withdrawals</h2>
      <WithdrawalsTable />
    </AdminWithdrawalsStyles>
  )
}

export default AdminWithdrawals
