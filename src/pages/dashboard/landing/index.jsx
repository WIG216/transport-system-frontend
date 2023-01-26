import React from 'react';
import Layout from '../../../components/dashboard/Layout/Layout';

function index() {
    return (
        <Layout title="Dashboard">
            <div>
            <div className="flex-4">
                    <a href="" className="stat-card">
                        <div className="stat-name">Total Classrooms</div>
                        <div className="stat-value">0</div>
                    </a>
                    <a href="" className="stat-card">
                        <div className="stat-name">Total Course Content</div>
                        <div className="stat-value">0</div>
                    </a>
                    <a href="" className="stat-card">
                        <div className="stat-name">Total Live Sessions</div>
                        <div className="stat-value">0</div>
                    </a>
                    <a href="" className="stat-card">
                        <div className="stat-name">Total Questions</div>
                        <div className="stat-value">0</div>
                    </a>
                </div>
            </div>
        </Layout>
    );
}

export default index;