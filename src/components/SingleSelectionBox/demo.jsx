<div>
          <div>
            Relevance{" "}
            {toggle ? (
              <button onClick={() => setToggle(!toggle)}>
                <IoIosArrowUp />
              </button>
            ) : (
              <button onClick={() => setToggle(!toggle)}>
                <IoIosArrowDown />{" "}
              </button>
            )}
            
          </div>
          {toggle&& 
            
            <div>
              {data.map((val, index) => (
              <p value={val.value} key={index}>
                {
                  showTick == val.label ? `&#9989;${val.label}` : val.label
                }
           
           
              </p>
            ))}
            </div>
            }
        </div>