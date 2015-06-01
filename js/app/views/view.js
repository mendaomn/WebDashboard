// View.js
// -------
define(["jquery", "backbone", "models/model"],

    function($, Backbone, Model){

        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#query_result",

            // View constructor
            initialize: function() {
                // Trigger render function on "change" event
                this.model.on("change", this.render, this);
                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {
                
                // Dynamically updates the UI with the view's template
                this.$el.html(this.model.get("value"));

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return View;

    }

);