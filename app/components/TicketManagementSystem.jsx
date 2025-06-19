import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  ChevronDown,
  CheckCircle,
  Clock,
  AlertTriangle,
  User,
  Calendar,
  Tag,
  MoreVertical,
} from "lucide-react";

const TicketManagementSystem = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const tickets = [
    {
      id: "T-1750064174691",
      title: "Test Ticket",
      priority: "MEDIUM",
      status: "Open",
      category: "TECHNICAL",
      created: "19/6/2025",
      assignee: "Unassigned",
    },
    {
      id: "T-1750048450798",
      title: "Network Issue",
      priority: "HIGH",
      status: "Resolved",
      category: "TECHNICAL",
      created: "19/6/2025",
      assignee: "John Doe",
    },
    {
      id: "T-1750048503050",
      title: "2nd issue",
      priority: "MEDIUM",
      status: "Resolved",
      category: "TECHNICAL",
      created: "19/6/2025",
      assignee: "Jane Smith",
    },
    {
      id: "T-1750150987635",
      title: "ada",
      priority: "MEDIUM",
      status: "Open",
      category: "TECHNICAL",
      created: "19/6/2025",
      assignee: "Unassigned",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "HIGH":
        return "bg-red-100 text-red-800 border-red-200";
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "LOW":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Resolved":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Progress":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Closed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Open":
        return <Clock className="w-3 h-3" />;
      case "Resolved":
        return <CheckCircle className="w-3 h-3" />;
      case "In Progress":
        return <AlertTriangle className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "HIGH":
        return "🔴";
      case "MEDIUM":
        return "🟡";
      case "LOW":
        return "🟢";
      default:
        return "⚪";
    }
  };

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "All" || ticket.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    TMS
                  </h1>
                  <p className="text-sm text-gray-500">Ticket Management</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-2">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  Aditya
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Tickets</h2>
              <p className="mt-1 text-gray-600">
                Manage and track your support tickets
              </p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>New Ticket</span>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tickets by title or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center space-x-2 px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/80 transition-colors shadow-sm"
              >
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">
                  {selectedFilter}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              {filterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-10">
                  <div className="py-2">
                    {["All", "Open", "In Progress", "Resolved", "Closed"].map(
                      (filter) => (
                        <button
                          key={filter}
                          onClick={() => {
                            setSelectedFilter(filter);
                            setFilterOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {filter}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tickets Grid */}
        <div className="grid gap-6">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm hover:shadow-lg transition-all duration-200 p-6 group hover:bg-white/80"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">
                      {getPriorityIcon(ticket.priority)}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {ticket.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-mono">
                        {ticket.id}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                        ticket.priority
                      )}`}
                    >
                      <span>{ticket.priority}</span>
                    </span>
                    <span
                      className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        ticket.status
                      )}`}
                    >
                      {getStatusIcon(ticket.status)}
                      <span>{ticket.status}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                      <Tag className="w-3 h-3" />
                      <span>{ticket.category}</span>
                    </span>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Created {ticket.created}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{ticket.assignee}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="relative">
                    <select
                      defaultValue={ticket.status}
                      className="appearance-none bg-transparent border-0 text-sm font-medium text-gray-700 focus:outline-none pr-6"
                    >
                      <option>Open</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                      <option>Closed</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTickets.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No tickets found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Tickets</p>
                <p className="text-2xl font-bold text-gray-900">
                  {tickets.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Tag className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Open</p>
                <p className="text-2xl font-bold text-blue-600">
                  {tickets.filter((t) => t.status === "Open").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Resolved</p>
                <p className="text-2xl font-bold text-green-600">
                  {tickets.filter((t) => t.status === "Resolved").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">High Priority</p>
                <p className="text-2xl font-bold text-red-600">
                  {tickets.filter((t) => t.priority === "HIGH").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManagementSystem;
