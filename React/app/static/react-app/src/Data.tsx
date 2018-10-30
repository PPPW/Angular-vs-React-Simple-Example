import * as React from 'react';

interface DataState {
    users: User[];
    loading: boolean;
}

export class Data extends React.Component<{}, DataState> {
    constructor(props: {}) {
        super(props);
        this.state = { users: [], loading: true };

        fetch('api/data')
            .then(response => response.json() as Promise<User[]>)
            .then(data => {
                this.setState({ users: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderUsersTable(this.state.users);

        return (
            <div>
                <h1>Users</h1>
                {contents}
            </div>
        );
    }

    private renderUsersTable(users: User[]) {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.Name}>
                            <td>{user.Name}</td>
                            <td>{user.Role}</td>
                            <td>{user.Status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

interface User {
    Name: string;
    Role: string;
    Status: string;
}