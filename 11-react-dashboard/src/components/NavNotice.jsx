import React from 'react'

function NavNotice() {
  return (
    <li className="nav-item dropdown">
        <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">4</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
                There are 4 new notifications
                <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">View All</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h4>Texto de relleno</h4>
                    <p>Lorem Ipsum ipsum lorem, latinatum for romanis</p>
                    <p>10 min ago</p>
                </div>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
                <i className="bi bi-x-circle text-danger"></i>
                <div>
                    <h4>Otro texto de relleno</h4>
                    <p>Lorem Ipsum ipsum lorem, latinatum for romanis</p>
                    <p>42 min ago</p>
                </div>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
                <i className="bi bi-check-circle text-success"></i>
                <div>
                    <h4>Por textos que no sea</h4>
                    <p>Lorem Ipsum ipsum lorem, latinatum for romanis</p>
                    <p>1h 12min ago</p>
                </div>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
                <i className="bi bi-info-circle text-primary"></i>
                <div>
                    <h4>Elige tu propia aventura</h4>
                    <p>Lorem Ipsum ipsum lorem, latinatum for romanis</p>
                    <p>1h 44min ago</p>
                </div>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
                <a href="#">Show all notifications</a>
            </li>
        </ul>
    </li>
  )
}

export default NavNotice