import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function Payment() {
  const query = useQuery();
  const navigate = useNavigate();
  const [status, setStatus] = useState(query.get('status') || '');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const course = query.get('course') || 'QualifyLearn Course Enrollment';
  const price = Number(query.get('price') || 99);
  const currency = 'USD';

  useEffect(() => {
    const token = query.get('token'); // PayPal returns token = orderId
    const statusParam = query.get('status');
    if (statusParam === 'success' && token) {
      // Capture PayPal order
      (async () => {
        try {
          setLoading(true);
          const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/paypal/capture-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId: token })
          });
          const data = await res.json();
          if (data.success) {
            setMessage('Payment successful. Thank you!');
            setStatus('success');
          } else {
            setMessage(data.message || 'Failed to capture PayPal payment');
            setStatus('error');
          }
        } catch (e) {
          setMessage('Network error capturing PayPal payment');
          setStatus('error');
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [query]);

  const handlePayPal = async () => {
    try {
      setLoading(true);
      setMessage('');
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/paypal/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: price, currency })
      });
      const data = await res.json();
      if (data.success && data.approveUrl) {
        window.location.href = data.approveUrl;
      } else {
        setMessage(data.message || 'Failed to start PayPal checkout');
      }
    } catch (e) {
      setMessage('Network error starting PayPal checkout');
    } finally {
      setLoading(false);
    }
  };

  const handleStripe = async () => {
    try {
      setLoading(true);
      setMessage('');
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/stripe/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course, price, currency: currency.toLowerCase() })
      });
      const data = await res.json();
      if (data.success && data.url) {
        window.location.href = data.url;
      } else {
        setMessage(data.message || 'Failed to start Stripe checkout');
      }
    } catch (e) {
      setMessage('Network error starting Stripe checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Checkout
          </motion.h1>
          <p className="mt-2 text-slate-600">Secure your seat for the selected program.</p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-blue-700">Course</p>
                <h2 className="text-lg font-extrabold text-slate-900">{course}</h2>
                <p className="text-sm text-slate-600">12 month program • Cohort date: {query.get('date')} {query.get('month')}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-600">Price</p>
                <p className="text-2xl font-extrabold text-slate-900">${price}</p>
              </div>
            </div>
          </div>

          {message && (
            <div className={`mt-4 p-3 rounded-xl text-sm border ${status === 'success' ? 'bg-green-50 text-green-800 border-green-200' : status === 'error' ? 'bg-red-50 text-red-800 border-red-200' : 'bg-blue-50 text-blue-800 border-blue-200'}`}>
              {message}
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button onClick={handlePayPal} disabled={loading} className="w-full px-5 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60">
              {loading ? 'Processing...' : 'Pay with PayPal'}
            </button>
            <button onClick={handleStripe} disabled={loading} className="w-full px-5 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-60">
              {loading ? 'Processing...' : 'Pay with Card (Stripe)'}
            </button>
          </div>

          <div className="mt-6">
            <button onClick={() => navigate(-1)} className="text-sm font-semibold text-slate-700 hover:text-blue-700">Back</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
