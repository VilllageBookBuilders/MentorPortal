import React from "react";
import mobiscroll from "./js/mobiscroll.react.min.js";
// import './BookingComponent.css'

const now = new Date();
const currYear = now.getFullYear();
const currMonth = now.getMonth();
const currDay = now.getDate();
const min = new Date(currYear, currMonth, currDay);
const max = new Date(currYear, currMonth + 6, currDay);
let firstload = true;


class CalendarDemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: [],
            labels: [],
            invalid: [],
            valid: []
        };
        
    }
    
    onPageLoadingSingle = (event, inst) => {
        this.getPrices(event.firstDay, function callback(bookings) {
            inst.settings.labels = bookings.labels
            inst.settings.invalid = bookings.invalid;
            inst.redraw();
        });
    }
    
    onPageLoadingMultiple = (event, inst) => {
        this.getBookings(event.firstDay, function callback(bookings) {
            inst.settings.labels = bookings.labels
            inst.settings.invalid = bookings.invalid;
            inst.redraw();
        });
    }
    
    getBookings = (d, callback) => {
        var invalid = [],
            labels = [];

        mobiscroll.util.getJson('https://trial.mobiscroll.com/getbookings/?year=' + d.getFullYear() + '&month=' + d.getMonth(), function (bookings) {
            console.log(bookings)
            for (var i = 0; i < bookings.length; ++i) {
                var booking = bookings[i],
                    d = new Date(booking.d);

                if (booking.nr > 0) {
                    labels.push({
                        d: d,
                        text: ' ',
                        background: '#ebeced',
                        color: 'none'
                    });
                } else {
                    invalid.push(d);
                }
            }
            callback({ labels: labels, invalid: invalid });
        }, 'jsonp');
    }
    
    onInit = (event, inst) => {
        if (firstload) {
            mobiscroll.util.getJson('https://trial.mobiscroll.com/getrecbookings/', (times) => {
                // We are loading the available spots from a remote API. The data needs to be parsed and days need to be disabled.
                // In addition to that we'll have to display the number of available spots in lables plus update the time picker to only allow the valid selections.
                // The approach is to invalidate all times and override (make them valid) if that time slot is available for booking. (Think basketball court for two hours)
                var labels = [],
                    invalid = [],
                    valid = [];

                for (var i = 0; i < times.length; ++i) {
                    var time = times[i];
                    // set all times to invalid
                    invalid = invalid.concat({ d: 'w' + i, start: '00:00', end: '23:59' })

                    for (var j = 0; j < time.length; ++j) {
                        var t = time[j];
                        // override invalid values with valids
                        valid = valid.concat({ d: 'w' + i, start: t, end: t })
                    }

                    if (time.length === 0) {
                        // set day to invalid if there is no selectable time on that day
                        invalid = invalid.concat('w' + [i]);
                    } else {
                        // add the number of selectable times to labels
                        labels = labels.concat({ d: 'w' + i, text: ' ', background: '#ebeced', color: 'none' });
                    }
                }
                
                firstload = false;
                
                this.setState({
                    labels: labels,
                    invalid: invalid,
                    valid: valid
                });
            }, 'jsonp');
        }
    }
    
     onDayChange = (event, inst) => {
         this.setState({ colors:  [{ d: 'w' + event.date.getDay(), background: '#007bff' }] });
    }

    render() {
        return (          
            <mobiscroll.Form className="dms-calendar-booking">
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Schedule your weekly Mentoring Session below!</mobiscroll.FormGroupTitle>
                    <mobiscroll.Calendar 
                        display="inline"                            // Specify display mode like: display="bottom" or omit setting to use default
                        type="hidden"
                        controls={['calendar', 'time']}             // More info about controls: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-controls
                        min={min}                                   // More info about min: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-min
                        max={max}                                   // More info about max: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-max
                        layout="fixed"                              // More info about layout: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-layout
                        calendarWidth={400}                         // More info about calendarWidth: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-calendarWidth
                        cssClass="dm-calendar-booking"              // More info about cssClass: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-cssClass
                        yearChange={false}                          // More info about yearChange: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-yearChange
                        steps={{                                    // More info about steps: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-steps
                            hour: 2,
                            minute: 60
                        }}
                        responsive={{                               // More info about responsive: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-responsive
                            xsmall: {
                                calendarWidth: undefined
                            },
                            medium: {
                                rows: 7,
                                circular: [false, false, false, true],
                                calendarWidth: 400
                            }
                        }}
                        touchUi={false}                             // More info about touchUi: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-touchUi
                        timeFormat="h A"                            // More info about timeFormat: https://docs.mobiscroll.com/4-10-3/react/calendar#localization-timeFormat
                        colors={this.state.colors}                  // More info about colors: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-colors
                        labels={this.state.labels}                  // More info about labels: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-labels
                        invalid={this.state.invalid}                // More info about invalid: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-invalid
                        valid={this.state.valid}                    // More info about valid: https://docs.mobiscroll.com/4-10-3/react/calendar#opt-valid
                        onInit={this.onInit}                        // More info about onInit: https://docs.mobiscroll.com/4-10-3/react/calendar#event-onInit
                        onDayChange={this.onDayChange}              // More info about onDayChange: https://docs.mobiscroll.com/4-10-3/react/calendar#event-onDayChange
                    />
                </mobiscroll.FormGroup>
            </mobiscroll.Form>
        );
    }    
}

export default CalendarDemo