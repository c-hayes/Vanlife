import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
    return (
        <>
        <nav>
            <Link to="/Host">Dashboard</Link>
            <Link to="/Host/Income">Income</Link>
            <Link to="/Host/Reviews">Reviews</Link>
        </nav>

        <Outlet />
        </>
    );
    }
